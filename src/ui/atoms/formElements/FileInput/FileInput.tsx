import React from "react";

interface FileInputProps{
    label: string
    onChange : (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FileInput: React.FC<FileInputProps> = ({
    label,
    onChange
})=>{
    return(
        <tr>
            <td>
                <label
                className="whitespace-nowrap font-medium">
                    {label}
                </label>
            </td>
            <td>
                <input type="file" onChange={onChange} multiple/>
            </td>
        </tr>
    )
}

export default FileInput