import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
} from '@patternfly/react-core';

export default function Home() {
  return (
    <PageSection>
      <Gallery hasGutter>
        {Array.from({ length: 50 }).map((_value, index) => <GalleryItem key={index}>
            <Card>
              <CardBody>This is a card</CardBody>
            </Card>
          </GalleryItem>)}
      </Gallery>
    </PageSection>
  );
}
