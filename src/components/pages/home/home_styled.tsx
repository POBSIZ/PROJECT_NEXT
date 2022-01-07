import styled, { css } from 'styled-components';

const animSet = css`
  /* MOVE CIRCLE ANIM SET */

  /* 1 */
  @-webkit-keyframes mc1 {
    from {
      transform: translateY(-40vh);
    }
    to {
      transform: translateY(-42vh);
    }
  }
  @keyframes mc1 {
    from {
      transform: translateY(-40vh);
    }
    to {
      transform: translateY(-42vh);
    }
  }

  /* 2 */
  @-webkit-keyframes mc2 {
    from {
      transform: translateY(-10vh);
    }
    to {
      transform: translateY(-13vh);
    }
  }
  @keyframes mc2 {
    from {
      transform: translateY(-10vh);
    }
    to {
      transform: translateY(-13vh);
    }
  }

  /* 3 */
  @-webkit-keyframes mc3 {
    from {
      transform: translateY(15vh);
    }
    to {
      transform: translateY(13vh);
    }
  }
  @keyframes mc3 {
    from {
      transform: translateY(15vh);
    }
    to {
      transform: translateY(13vh);
    }
  }

  /* 4 */
  @-webkit-keyframes mc4 {
    from {
      transform: translateY(-3vh);
    }
    to {
      transform: translateY(-5vh);
    }
  }
  @keyframes mc4 {
    from {
      transform: translateY(-3vh);
    }
    to {
      transform: translateY(-5vh);
    }
  }

  /* 5 */
  @-webkit-keyframes mc5 {
    from {
      transform: translateY(-60vh);
    }
    to {
      transform: translateY(-61vh);
    }
  }
  @keyframes mc5 {
    from {
      transform: translateY(-60vh);
    }
    to {
      transform: translateY(-61vh);
    }
  }
`;

const StyledHome = styled.section.attrs((props) => {})`
  ${(props) => {
    const headerDesktopHeight = props.theme.size.$header_desktop_line_height;
    const headerMobileHeight = props.theme.size.$header_mobile_line_height;
    const colorKeyGradient = props.theme.palette.$color_key_gradient;
    const colorBaseBlack = props.theme.palette.$color_base_black;
    return css`
      ${animSet}
      overflow: hidden;
      height: 95vh;
      position: relative;

      .expend_more {
        position: absolute;
        font-size: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(79vh);
        -webkit-animation: 0.8s ease-in-out 0s infinite alternate move_logo;
        animation: 0.8s ease-in-out 0s infinite alternate move_logo;
      }

      .about_main {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        .about_main-logo {
          position: relative;
          width: fit-content;
          margin: auto;
          top: -130px;

          display: flex;
          flex-wrap: wrap;
          flex-flow: column;
          justify-content: center;
          align-items: center;

          .logo-name {
            font-size: 80px;
            font-weight: bold;
          }
          .logo-desc {
            margin-top: 10px;
            font-size: 30px;
            font-weight: 500;
          }
        }

        .about_main-surv {
          width: 100%;
          display: block;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          p {
            font-size: 18px;
          }
          a {
            display: block;
            position: relative;
            width: fit-content;
            line-height: 40px;
            padding: 0 10%;
            font-size: 20px;
            font-weight: 500;
            border-radius: 40px;
            color: ${colorBaseBlack};
            color: #fff;
            top: 10px;
            margin: auto;
            background-image: ${colorKeyGradient};
            background-color: ${colorBaseBlack};
          }
        }

        .circle-wrapper {
          position: absolute;
          font-size: 10px;

          .circle {
            position: absolute;
            width: 100px;

            &:nth-child(1) {
              /* top: -40vh; */
              left: 10vw;
              width: 15em;
              transform: rotate(30deg) translateY(40%);
              -webkit-animation: 0.8s ease-in-out infinite alternate mc1;
              animation: 0.8s ease-in-out infinite alternate mc1;
            }

            &:nth-child(2) {
              top: -10vh;
              left: 5vw;
              width: 5em;
              transform: rotate(50deg) translateY(-10vh);
              filter: blur(4px);
              -webkit-filter: blur(4px);
              -webkit-animation: 1.2s ease-in-out infinite alternate mc2;
              animation: 1.2s ease-in-out infinite alternate mc2;
            }

            &:nth-child(3) {
              top: 15vh;
              left: 35vw;
              width: 8em;
              transform: rotate(10deg) translateY(15vh);
              filter: blur(3px);
              -webkit-filter: blur(3px);
              -webkit-animation: 1.1s ease-in-out infinite alternate mc3;
              animation: 1.1s ease-in-out infinite alternate mc3;
            }

            &:nth-child(4) {
              top: -3vh;
              left: 60vw;
              width: 12em;
              transform: rotate(-30deg) translateY(-3vh);
              filter: blur(2px);
              -webkit-filter: blur(2px);
              -webkit-animation: 0.9s ease-in-out infinite alternate mc4;
              animation: 0.9s ease-in-out infinite alternate mc4;
            }

            &:nth-child(5) {
              top: 0vh;
              left: 80vw;
              width: 40em;
              transform: rotate(-90deg) translateY(-60vh);
              filter: blur(1px);
              -webkit-filter: blur(1px);
              -webkit-animation: 1.5s ease-in-out infinite alternate mc5;
              animation: 1.5s ease-in-out infinite alternate mc5;
            }
          }
        }
      }

      @-webkit-keyframes move_logo {
        from {
          transform: translateY(79vh);
        }
        to {
          transform: translateY(80vh);
        }
      }
      @keyframes move_logo {
        from {
          transform: translateY(79vh);
        }
        to {
          transform: translateY(80vh);
        }
      }

      @media screen and (max-width: 1150px) {
        .about__main-logo {
          .logo-name {
            font-size: 50px !important;
          }
          .logo-desc {
            font-size: 20px !important;
          }
        }

        .about_main-surv {
          p {
            font-size: 14px !important;
          }
          a {
            line-height: 40px;
            padding: 0 20%;
            font-size: 18px;
            color: #fff;
            top: 10px;
          }
        }

        .circle-wrapper {
          .circle {
            font-size: 5px;
          }
        }

        .about__desc {
          width: 300px;
          span {
            font-size: 20px;
          }
          p {
            width: 300px;
            font-size: 18px;
          }
        }
      }

      @media screen and (max-width: 800px) {
        .about_desc {
          width: 200px;
          span {
            font-size: 25px;
          }
          p {
            width: 200px;
            font-size: 12px;
          }
        }
      }

      @media screen and (max-width: 500px) {
        .about_main-logo {
          .logo-name {
            font-size: 40px !important;
          }
          .logo-desc {
            font-size: 15px !important;
          }
        }

        .about_desc {
          width: 200px;
          span {
            font-size: 18px;
          }
          p {
            width: 200px;
          }
        }
        .expend_more {
          display: none;
        }
      }
    `;
  }}
`;

export default StyledHome;
