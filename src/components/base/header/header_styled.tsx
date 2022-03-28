import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledHeader = styled.header.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const headerKeyBlue = Theme.palette.$color_key_blue;
    const headerLineBlack = Theme.palette.$color_base_line;
    const headerBaseBlack = Theme.palette.$color_base_black;
    const headerDesktopHeight = props.theme.size.$header_desktop_line_height;
    const headerMobileHeight = props.theme.size.$header_mobile_line_height;
    return css`
      position: fixed;
      z-index: 5;
      top: 0;
      width: 100%;
      height: ${headerDesktopHeight};
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 1px 0px rgba(56, 56, 56, 0.3);
      font-weight: 500;
      background-color: rgba(255, 255, 255, 0.98);

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        .logo-img {
          width: 50px;
          height: 50px;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          margin-right: 5px;
        }
        a {
          font-size: 30px;
          font-weight: bold;
          color: #000;
        }
      }

      .nav {
        position: relative;
        line-height: ${headerDesktopHeight};
        display: flex;
        align-items: center;
        overflow: hidden;
        .nav-menuBar {
          cursor: pointer;
          color: ${headerBaseBlack};
          border: none;
          font-size: 25px;
          line-height: ${headerDesktopHeight};
          padding: 0;
          background-color: transparent;
        }

        .navTab {
          line-height: initial;
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          transform-origin: center;
          transform: translateX(-300%);
          left: 50%;
          will-change: opacity, transform;
          // transition: all .5s ease-in-out;
          .navTab-container {
            position: fixed;
            z-index: 100;
            background-color: #fff;

            transform-origin: center;
            transform: translateX(100%);
            right: 0;

            width: 30%;
            height: 100vh;
            text-align: right;
            padding: 2% 0;
            box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.07);

            will-change: opacity, transform;
            transition: all 0.4s ease-in-out;
            .navTab-user {
              padding: 0 5% 5%;
              border-bottom: 1px solid ${headerLineBlack};
              .user-login {
                line-height: initial;
                display: inline-block;
                width: auto;
                font-size: 30px;
                font-weight: bold;
                color: ${headerBaseBlack};
                transition: all 0.3s ease;
                &::after {
                  position: relative;
                  content: '';
                  display: block;
                  transform: scaleX(0%);
                  height: 3px;
                  background-color: ${headerBaseBlack};
                  top: -5px;
                  will-change: transform;
                  transition: all 0.3s;
                }

                &:hover {
                  &::after {
                    /* transform: scaleX(100%); */
                  }
                }
              }
              .user-profile {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .profile_left {
                  display: flex;
                  align-items: center;
                  span {
                    cursor: default;
                    margin: 0 10px;
                    font-weight: 500;
                    font-size: 20px;
                  }
                  .profile-img {
                    display: block;
                    width: 50px;
                    height: 50px;
                    background-color: ${headerBaseBlack};
                    border-radius: 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                  }
                }
                .user-logout {
                  position: relative;
                  top: 2px;
                  display: block;
                  cursor: pointer;
                  color: ${headerBaseBlack};
                  display: block;
                  width: fit-content;
                  font-size: 20px;
                  font-weight: 500;
                  background-color: transparent;
                  border: none;
                  will-change: opacity, transform;
                  transition: all 0.3s ease;
                  &::after {
                    // position: relative;
                    content: '';
                    display: block;
                    transform: scaleX(0%);
                    height: 2px;
                    background-color: ${headerBaseBlack};
                    top: 0px;
                    will-change: transform;
                    transition: all 0.3s;
                  }

                  &:hover {
                    &::after {
                      transform: scaleX(100%);
                    }
                  }
                }
              }
              .user-more {
                line-height: initial;
                font-size: 14px;
                color: rgb(90, 90, 90);
                a {
                  text-decoration: underline;
                  color: ${headerKeyBlue};
                }
              }
            }
            .navTab-link {
              a {
                text-align: left;
                display: block;
                padding: 0 5%;
                line-height: 55px;
                font-size: 20px;
                font-weight: 500;
                color: ${headerBaseBlack};
                border-bottom: 1px solid ${headerLineBlack};
                will-change: padding;
                transition: all 0.3s;
                &:hover {
                  background-color: ${headerBaseBlack};
                  color: #fff;
                  padding: 0 10%;
                }
              }
            }
          }
          .navTab-bg {
            cursor: pointer;
            overflow: hidden;
            position: fixed;
            top: 0;

            transform-origin: center;
            transform: translateX(-100%);
            left: 0;

            width: 70%;
            height: 100vh;
            background-color: ${headerLineBlack};
            will-change: opacity, transform;
            transition: all 0.4s ease-in-out;
          }
        }
      }

      @media screen and (max-width: 1000px) {
        height: ${headerMobileHeight};
        padding: 0 5%;

        .logo {
          .logo-img {
            margin-right: 5px;
          }
          a {
            font-size: 20px;
          }
        }

        .nav {
          line-height: ${headerMobileHeight};
          .nav-menuBar {
            line-height: ${headerMobileHeight};
          }

          .navTab {
            .navTab-container {
              width: 80%;
              height: 100vh;
              padding: 5% 0;
              .navTab-user {
                padding: 0 5% 5%;
                .user-login {
                  font-size: 30px;
                }
                .user-profile {
                  .profile_left {
                    span {
                      margin: 0 10px;
                      font-size: 16px;
                    }
                    .profile-img {
                      width: 35px;
                      height: 35px;
                    }
                  }
                  .user-logout {
                    font-size: 16px;
                  }
                }
                .user-more {
                  font-size: 12px;
                }
              }
              .navTab-link {
                a {
                  font-size: 16px;
                }
              }
            }
            .navTab-bg {
              width: 20%;
            }
          }
        }
      }
    `;
  }}
`;

StyledHeader.defaultProps = {};

export default StyledHeader;
