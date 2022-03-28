import { FC } from 'react';
export declare type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    /**
     * 请求类型
     */
    action: string;
    /**
     * file array
     */
    defaultFileList?: UploadFile[];
    /**
     * 上传前回调函数
     */
    beforeUpload?: (file: File) => boolean | Promise<File>;
    /**
     * on progress
     */
    onProgress?: (percentage: number, file: File) => void;
    /**
     * 上传成功的回调函数
     */
    onSuccess?: (data: any, file: File) => void;
    /**
     * 上传错误的回调
     */
    onError?: (err: any, file: File) => void;
    /**
     * 文件修改的回调
     */
    onChange?: (file: File) => void;
    /**
     * 移除上传文件的回调
     */
    onRemove?: (file: UploadFile) => void;
    /**
     * 请求头信息
     */
    headers?: {
        [key: string]: any;
    };
    /**
     * name
     */
    name?: string;
    /**
     * data
     */
    data?: {
        [key: string]: any;
    };
    /**
     *
     */
    withCredentials?: boolean;
    /**
     *
     */
    accept?: string;
    /**
     * 是否允许选择多项
     */
    multiple?: boolean;
    /**
     * 是否开启拖拽
     */
    drag?: boolean;
}
export declare const Upload: FC<UploadProps>;
export default Upload;
