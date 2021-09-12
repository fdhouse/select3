import {FC, useState} from "react";
import styled from "styled-components";
import {DataEntity, Select} from "./Select";

export interface Select3Props {
    data?: DataEntity[][];
    value?: DataEntity[];
    placeholder?: string;
    onChange?: (value:DataEntity[])=>any;
    onSearch?: (value:string)=>any;
}

export const Select3: FC<Select3Props> = (props: Select3Props) => {
    const [val, setVal] = useState<DataEntity[]>(props.value??[{value:0,title:'全部'},{value:0,title:'全部'},{value:0,title:'全部'}]);

    const onChange = (value: DataEntity, flag: number) => {
        if (!props.data) {
            return
        }
        let valArr:DataEntity[] = [{value:0,title:'全部'},{value:0,title:'全部'},{value:0,title:'全部'}];
        // If building is changed, clear room info and update level info
        if (flag === 0){
            valArr = [value,{value:0,title:'全部'},{value:0,title:'全部'}];
        }
        // If level is changed, update room info
        if (flag === 1){
            valArr = [val[0],value,{value:0,title:'全部'}];
        }
        if (flag === 2){
            valArr = [val[0],val[1],value];
        }
        setVal(valArr)
        props.onChange && props.onChange(valArr);
    }

    const search = (value:string) => {
        console.log(value)
        props.onSearch && props.onSearch(value);
    }

    return (
        <Container>
            <div className={'searchHeader'}><input className={'search'} placeholder={props.placeholder} onChange={(e)=>{search(e.target.value)}}/></div>
            <div className={'chosen'} >{val[0].title} - {val[1].title} - {val[2].title}</div>
            <div className={'selects'}>
                <div>
                    <Select data={props.data && props.data[0]} value={val[0]} onChange={(e) => {onChange(e, 0)}} />
                </div>
                <div>
                    <Select data={props.data && props.data[1]} value={val[1]} onChange={(e) => {onChange(e, 1)}} />
                </div>
                <div>
                    <Select data={props.data && props.data[2]} value={val[2]} onChange={(e) => {onChange(e, 2)}} />
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
  .selects {
    display: flex;
    justify-content: space-around;

    div {
      line-height: 28px;
      width: 100%;
    }
  }

  .search {
    width: calc(100% - 14px);
    border: 1px solid #ccc;
    line-height: 36px;
    border-radius: 5px;
    padding-left: 12px;
  }

  .search:focus {
    border: 1px solid #ccc;
  }
  
  .chosen {
    padding-left: 30px;
    line-height: 36px;
    border-bottom: 1px solid RGB(153,153,153);
  }
`;