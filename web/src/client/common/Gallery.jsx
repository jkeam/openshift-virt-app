import {
  Card,
  CardBody,
  Gallery as PGallery,
  GalleryItem,
} from '@patternfly/react-core';

export default function Gallery() {
    return (
    <PGallery hasGutter>
      {Array.from({ length: 50 }).map((_value, index) => <GalleryItem key={index}>
          <Card>
            <CardBody>This is a card</CardBody>
          </Card>
        </GalleryItem>)}
    </PGallery>
  );
}
