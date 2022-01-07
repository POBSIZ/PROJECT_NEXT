import styled, { createGlobalStyle, ThemeProvider, css } from "styled-components";

const GlobalStyle = {
    palette: {
        // 키 컬러
        $color_key_blue: '#6070ff',
        $color_key_red: '#d62839',
        $color_key_gradient: 'linear-gradient(to right, #6070ff 0%, #d62839 100%)',

        // 기본 팔레트
        $color_d5_blue: 'rgb(47, 90, 157,100%)',
        $color_d4_blue: 'rgb(59, 105, 190, 100%)',
        $color_d3_blue: 'rgb(80, 133, 231, 100%)',
        $color_d2_blue: 'rgb(106, 158, 255, 100%)',
        $color_d1_blue: 'rgb(180, 206, 255, 100%)',

        // 검정색 팔레트
        $color_line_black: 'rgba(0, 0, 0, 0.2)',
        $color_base_black: 'rgb(41, 47, 54, 100%)',

        // 회색조 팔레트
        $color_d4_gray: 'rgb(129, 129, 129, 100%)',
        $color_d3_gray: 'rgb(208, 208, 208, 100%)',
        $color_d2_gray: 'rgb(235, 235, 235, 100%)',
        $color_base_white: 'rgb(255, 255, 255, 100%)',

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
    },
    size: {
        // Header 높이
        $header_desktop_line_height: '60px',
        $header_mobile_line_height: '50px',
    }
}

export default GlobalStyle;
