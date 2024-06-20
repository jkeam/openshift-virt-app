import { Breadcrumb as Bc, BreadcrumbItem } from '@patternfly/react-core';

export default function Breadcrumb() {
  return (
    <Bc>
      <BreadcrumbItem>Section home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section landing
      </BreadcrumbItem>
    </Bc>
  );
}
