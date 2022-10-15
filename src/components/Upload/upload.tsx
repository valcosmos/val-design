import React, { FC, useRef, ChangeEvent, useState, ReactNode } from 'react'
import axios from 'axios'
import UploadList from './uploadList'
import Dragger from './dragger'
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string
  size: number
  name: string
  status?: UploadFileStatus
  percent?: number
  raw?: File
  response?: any
  error?: any
}
export interface UploadProps {
  /**
   * 接口地址
   */
  action: string
  /**
   * file array
   */
  defaultFileList?: UploadFile[]
  /**
   * 上传前回调函数
   */
  beforeUpload?: (file: File) => boolean | Promise<File>
  /**
   * on progress
   */
  onProgress?: (percentage: number, file: File) => void
  /**
   * 上传成功的回调函数
   */
  onSuccess?: (data: any, file: File) => void
  /**
   * 上传错误的回调
   */
  onError?: (err: any, file: File) => void
  /**
   * 文件修改的回调
   */
  onChange?: (file: File) => void
  /**
   * 移除上传文件的回调
   */
  onRemove?: (file: UploadFile) => void
  /**
   * 请求头信息
   */
  headers?: { [key: string]: any }
  /**
   * name
   */
  name?: string
  /**
   * data
   */
  data?: { [key: string]: any }
  /**
   * 跨域请求时是否需要使用凭证
   */
  withCredentials?: boolean
  /**
   * 返回数据的类型
   */
  accept?: string
  /**
   * 是否允许选择多项
   */
  multiple?: boolean
  /**
   * 是否开启拖拽
   */
  drag?: boolean
  /**
   * children
   *
   */
  children?: ReactNode | string
}

export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (
    updateFile: UploadFile,
    updateObj: Partial<UploadFile>
  ) => {
    setFileList((prevList) => {
      return prevList.map((file) => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter((item) => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach((file) => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then((processedFile) => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    const _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    // setFileList([_file, ...fileList])
    setFileList((prevList) => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key])
      })
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data'
        },
        withCredentials,
        onUploadProgress: (e) => {
          const percentage = Math.round((e.loaded * 100) / e.total!) || 0
          if (percentage < 100) {
            updateFileList(_file, { percent: percentage, status: 'uploading' })
            if (onProgress) {
              onProgress(percentage, file)
            }
          }
        }
      })
      .then((resp) => {
        updateFileList(_file, { status: 'success', response: resp.data })
        if (onSuccess) {
          onSuccess(resp.data, file)
        }
        if (onChange) {
          onChange(file)
        }
      })
      .catch((err) => {
        updateFileList(_file, { status: 'error', error: err })
        if (onError) {
          onError(err, file)
        }
        if (onChange) {
          onChange(file)
        }
      })
  }

  return (
    <div className="v-upload-component">
      <div
        className="v-upload-input"
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        {drag
          ? (
          <Dragger
            onFile={(files) => {
              uploadFiles(files)
            }}
          >
            {children}
          </Dragger>
            )
          : (
              children
            )}
        <input
          className="v-file-input"
          style={{ display: 'none' }}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}

Upload.defaultProps = {
  name: 'file'
}
export default Upload
