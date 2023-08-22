export interface WorkspacesResponseDto {
  _embedded: EmbeddedDto;
  _links: LinksDto;
  page: PageDto;
}

interface EmbeddedDto {
  workspaces: WorkspaceDto[];
}

interface WorkspaceDto {
  name: string;
  tags: TagsDto;
  identifier: string;
  id: number;
  _links: WorkspaceLinksDto;
}

export interface TagsDto {
  workspaceOwner: string[];
  confidentiality: string[];
  environment: string[];
  RegulatoryOnboardingId?: string[];
}

interface WorkspaceLinksDto {
  self: LinkDto;
  paymentMethods: LinkDto;
}

interface LinkDto {
  href: string;
}

interface LinksDto {
  self: LinkDto;
  first: LinkDto;
  next: LinkDto;
  last: LinkDto;
}

interface PageDto {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
