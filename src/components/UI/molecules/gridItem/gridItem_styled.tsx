import styled, { css } from 'styled-components';

const StyledGridItem = styled.article.attrs((props) => ({}))`
  ${(props) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      .thumbnails {
        padding: 5px;
        margin-bottom: 30px;
        width: 25%;
      }
      .Image-div {
        width: 100%;
        margin-bottom: 10px;
        box-shadow: 0px 10px 10px rgb(0, 0, 10, 10%);
      }
      img {
        object-fit: cover;
      }

      @media screen and (max-width: 800px) {
        padding: 20px;
        .thumbnails {
          padding: 5px;
          margin-bottom: 30px;
          width: 50%;
        }
        .Image-div {
          width: 100%;
          margin-bottom: 10px;
          box-shadow: 0px 10px 10px rgb(0, 0, 10, 10%);
        }
      }
    `;
  }};
`;

export default StyledGridItem;
``;
