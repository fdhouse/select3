import {FC, useState, useEffect} from "react";
import styled from "styled-components";

export interface DataEntity {
    value: number;
    title: string;
}

export interface SelectProps {
    data?: DataEntity[];
    value?: number;
    placeholder?: string;
    onChange?: (value:number)=>any;
}

export const Select: FC<SelectProps> = ({data, value, placeholder, onChange}: SelectProps) => {
    const [val, setVal] = useState(0);

    useEffect(() => {
        return () => {
            console.log(value)
        };
    }, [value]);


    const onClick = (value: number) => {
        setVal(value);
        onChange && onChange(value);
    }

    return (
        <Container>
            <div><input className={'search'} placeholder={placeholder}/></div>
            {
                (data && data.length > 0) && data.map((item, index) => {
                    return <div className={val === item.value ? 'selected' : ''} key={index} onClick={() => {
                        onClick(item.value)
                    }}>{item.title}</div>
                })
            }
            {
                data?.length === 0 && 'No Data'
            }
        </Container>
    )
}

const Container = styled.div`
  background: #FFF;

  div {
    font-size: 18px;
    line-height: 28px;
    width: 100%;
  }

  .selected {
    background: #ccc;
  }

  .search {
    width: calc(100% - 4px);
    border: 1px solid #ccc;
    line-height: 26px;
    border-radius: 5px;
  }

  .search:focus {
    border: 1px solid #ccc;
  }
`;