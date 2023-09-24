import React from 'react'

export interface IOption {
    label: string;
    value: string;
};

export interface IProps {
    formlabel: string;
    options: IOption[];
};

export default function Select({ formlabel, options }: IProps) {
    return (
        <select id="small" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500">
            <option selected>{formlabel}</option>
            {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
    )
}
