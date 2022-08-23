import ProductCard from '../product-card/product-card.component';

import {
  CategoryPreviewContainer,
  PreviewBody,
  PreviewTitle
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <PreviewTitle to={title}>{title.toUpperCase()}</PreviewTitle>
      </h2>
      <PreviewBody>
        {
          products
            .filter((_, idx) => idx < 4)
            .map((product) => <ProductCard key={product.id} product={product} />)
        }
      </PreviewBody>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;