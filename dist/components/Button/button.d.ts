import React from 'react';
interface BaseButtonProps {
    /**
     * 按钮类名
     */
    className?: string;
    /**
     * 是否禁用
     */
    disabled?: boolean;
    /**
     * 按钮大小
     */
    size?: 'large' | 'small';
    /**
     * 按钮类型
     */
    btnType?: 'primary' | 'default' | 'danger' | 'link';
    /**
     * 按钮内容
     */
    children: React.ReactNode | string;
    /**
     * 链接地址
     */
    href?: string;
    /**
     * 点击事件
     */
    onClick?: () => void;
}
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 这是我们的第一个Button组件
 *
 * ### 引用方法
 *
 * ``` js
 *
 * import {Button} from 'val-design'
 *
 * ```
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
