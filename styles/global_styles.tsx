import { type } from 'os';
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from 'styled-components';
import { Type } from 'typescript';

const GlobalStyle = {
  palette: {
    // 키 컬러
    $color_key_blue: '#3182F6',
    $color_key_red: '#d62839',
    $color_key_gradient: 'linear-gradient(to right, #3182F6 0%, #d62839 100%)',

    // 기본 팔레트
    $color_base_line: 'rgba(30, 30, 30, 20%)',
    $color_base_black: 'rgb(30, 30, 30, 100%)',
    $color_base_gray: 'rgb(30, 30, 30, 50%)',
    $color_base_LightGray: 'rgb(30, 30, 30, 8%)',
    $color_base_white: 'rgb(255, 255, 255, 100%)',

    // 청색조 팔레트
    $color_d5_blue: 'rgb(47, 90, 157,100%)',
    $color_d4_blue: 'rgb(59, 105, 190, 100%)',
    $color_d3_blue: 'rgb(80, 133, 231, 100%)',
    $color_d2_blue: 'rgb(106, 158, 255, 100%)',
    $color_d1_blue: 'rgb(180, 206, 255, 100%)',

    // 회색조 팔레트
    $color_d4_gray: 'rgb(129, 129, 129, 100%)',
    $color_d3_gray: 'rgb(208, 208, 208, 100%)',
    $color_d2_gray: 'rgb(235, 235, 235, 100%)',

    // 적색조 팔레트
    $color_d5_red: 'rgb(210, 29, 38, 100%)',
    $color_d4_red: 'rgb(222, 48, 61, 100%)',
    $color_d3_red: 'rgb(240, 58, 71, 100%)',
    $color_d2_red: 'rgb(255, 111, 121, 100%)',
    $color_d1_red: 'rgb(255, 154, 161, 100%)',

    // 알림 팔레트
    $color_failure: 'rgb(231, 76, 60, 100%)',
    $color_success: 'rgb(46, 204, 113, 100%)',
    $color_warning: 'rgb(241, 196, 15, 100%)',
    $color_disabled: 'rgb(218, 218, 218, 60%)',
  },
  size: {
    // Header 높이
    $header_desktop_line_height: '60px',
    $header_mobile_line_height: '50px',
  },
  font: {
    // Title
    $font_title_big: 'font-size: 2.500em; font-weight: 700;',
    $font_title_medium: 'font-size: 2.000em; font-weight: 700;',
    $font_title_regular: 'font-size: 1.500em; font-weight: 700',
    $font_subtitle: 'font-size: 1.125em; font-weight: 400;',

    // Body
    $font_body_head: 'font-size: 1.250em; font-weight: 500;',
    $font_body_1: 'font-size: 1.000em; font-weight: 400;',
    $font_body_info: 'font-size: 0.875em; font-weight: 400;',

    // Button & Badge
    $font_button_default: 'font-size: 1.000em; font-weight: 500;',
    $font_button_option: 'font-size: 0.875em; font-weight: 400;',
    $font_button_small: 'font-size: 0.750em; font-weight: 400;',
    $font_badge_small: 'font-size: 0.625em; font-weight: 400;',
  },
  media: {
    $tablet_max_width: '1000px',
    $mobile_max_width: '800px',
    $min_max_width: '400px',
  },
};

export type GlobalStyleType = typeof GlobalStyle;

export default GlobalStyle;
