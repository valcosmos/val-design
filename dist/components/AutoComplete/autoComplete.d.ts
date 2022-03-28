import { FC, ReactElement } from 'react';
import { InputProps } from '../Input/input';
interface DataSourceObject {
    value: string;
}
export declare type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    /**
     * request
     */
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    /**
     * on select callback
     */
    onSelect?: (item: DataSourceType) => void;
    /**
     * render options
     */
    renderOption?: (item: DataSourceType) => ReactElement;
}
/**
 * ## auto compelete component
 *
 * @param props
 * @returns
 */
export declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
