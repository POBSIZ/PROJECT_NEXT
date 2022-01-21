import styled, { css } from 'styled-components';

const StyledGridItem = styled.article.attrs((props) => ({}))`
  ${(props) => {
    return css`
      .Image-div {
        width: 150px;
        box-shadow: 0px 10px 10px rgb(0, 0, 10, 10%);
      }
      img {
        object-fit: cover;
      }
    `;
  }};
`;

export default StyledGridItem;
