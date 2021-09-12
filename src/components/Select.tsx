import {FC, useState, useEffect} from "react";
import styled from "styled-components";

export interface DataEntity {
    value: number;
    title: string;
}

export interface SelectProps {
    data?: DataEntity[];
    value?: DataEntity;
    onChange?: (value:DataEntity)=>any;
}

export const Select: FC<SelectProps> = ({data, value, onChange}: SelectProps) => {
    const [val, setVal] = useState<DataEntity>(value??{value:0, title:'全部'});

    useEffect(() => {
        if (value !== val){
            setVal(value??{value:0, title:'全部'});
        }
    },[value, val]);


    const onClick = (value: DataEntity) => {
        setVal(value);
        onChange && onChange(value);
    }

    return (
        <Container>
            {
                (data && data.length > 0) && data.map((item, index) => {
                    return <div className={val.value === item.value ? 'selected' : ''} key={index} onClick={() => {
                        onClick(item)
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
    line-height: 28px;
    width: 100%;
    color: RGB(153,153,153)
  }

  .selected {
    color: #000;
  }
`;