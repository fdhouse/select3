import {FC, useState, useEffect} from "react";
import styled from "styled-components";
import {Select} from "./Select";

export interface DataEntity {
    value: number,
    title: string
}

export interface SelectProps {
    data?: DataEntity[],
    value?: number[]
}

export const Select3: FC<SelectProps> = ({value}: SelectProps) => {
    const [val, setVal] = useState(value??[0,0,0]);

    const [buildingArr, setBuildingArr] = useState([{value: 1, title: 'Building One'},{value: 2, title: 'Building Two'},{value: 3, title: 'Building Three'}]);
    const [levelArr, setLevelArr] = useState([{value: 1, title: 'First Floor'},{value: 2, title: 'Second Floor'},{value: 3, title: 'Third Floor'}]);
    const [roomArr, setRoomArr] = useState([{value: 1, title: 'Room One'},{value: 2, title: 'Room Two'},{value: 3, title: 'Room Three'}]);

    // todo update data from api
    const getData = (level:number) => {
        const arr = [
            [{value: 1, title: 'Building One'},{value: 2, title: 'Building Two'},{value: 3, title: 'Building Three'}],
            [{value: 11, title: 'First Floor'},{value: 22, title: 'Second Floor'},{value: 33, title: 'Third Floor'}],
            [{value: 111, title: 'Room One'},{value: 222, title: 'Room Two'},{value: 333, title: 'Room Three'}],
            [{value: 4, title: 'Building Four'},{value: 5, title: 'Building Five'},{value: 6, title: 'Building Six'}],
            [{value: 44, title: 'Forth Floor'},{value: 55, title: 'Fifth Floor'},{value: 66, title: 'Sixth Floor'}],
            [{value: 444, title: 'Room Four'},{value: 555, title: 'Room Five'},{value: 666, title: 'Room Six'}],
        ];
        return arr[level];
    }

    const onChange = async (value: number, level: number) => {
        let valArr = val;
        // If building is changed, clear room info and update level info
        if (level === 0){
            valArr = [value,0,0];
            setLevelArr(getData(4))
            setRoomArr([])
        }
        // If level is changed, update room info
        if (level === 1){
            valArr = [val[0],value,0];
            setRoomArr(getData(5))
        }
        valArr[level] = value;
        console.log('update:',valArr)
        await setVal(valArr)
        console.log('update1:',val)
    }

    return (
        <Container>
            <div>
                <Select data={buildingArr} value={val[0]} onChange={(e) => {onChange(e, 0)}} placeholder={'Please choose building'} />
            </div>
            <div>
                <Select data={levelArr} value={val[1]} onChange={(e) => {onChange(e, 1)}} placeholder={'Please choose level'} />
            </div>
            <div>
                <Select data={roomArr} value={val[2]} onChange={(e) => {onChange(e, 2)}} placeholder={'Please choose room'} />
            </div>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    font-size: 18px;
    line-height: 28px;
    width: 97%;
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