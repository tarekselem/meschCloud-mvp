import { TagsDto, WorkspacesResponseDto } from './api-dto';

interface Workspace {
  id: number;
  name: string;
  identifierIcon: string;
  selfHref: string;
  tags: string;
}

enum EIdentifiers {
  MOBILE = 'likvid-mobile',
  OPERATIONS = 'likvid-operations',
  BACKEND = 'likvid-backend',
  OPEN_DEV_STACK = 'opendevstack',
  WEBSITE = 'likvid-website',
}

export class WorkspacesList {
  workspaces: Workspace[];

  constructor(source: WorkspacesResponseDto) {
    this.workspaces = source._embedded.workspaces.map((workspace) => {
      return {
        id: workspace.id,
        name: workspace.name,
        selfHref: workspace._links.self.href,
        identifierIcon: this.mapIdentifierIcon(
          workspace.identifier as EIdentifiers
        ),
        tags: this.mapTags(workspace.tags),
      };
    });
  }

  private mapIdentifierIcon(identifier: EIdentifiers): string {
    switch (identifier) {
      case EIdentifiers.MOBILE:
        return 'fas fa-mobile-alt';
      case EIdentifiers.WEBSITE:
        return 'fas fa-globe';
      case EIdentifiers.BACKEND:
        return 'fas fa-terminal';

      default:
        return 'fas fa-cloud';
    }
  }

  private mapTags(tags: TagsDto): string {
    const combinedTags = [
      // ...tags.RegulatoryOnboardingId,
      ...tags.confidentiality,
      ...tags.environment,
      ...tags.workspaceOwner,
    ];

    return combinedTags.join(', ');
  }
}
