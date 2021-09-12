import {FC, useState} from "react";
import styled from "styled-components";
import {Select3, Select3Props} from "../components/Select3";

export const LinkSelect: FC = () => {
    const [arr] = useState<Select3Props>({
        value: [{value: 2, title: 'Building Two'},{value: 1, title: 'First Floor'},{value: 3, title: 'Room Three'}],
        data: [
            [{value: 1, title: 'Building One'},{value: 2, title: 'Building Two'},{value: 3, title: 'Building Three'}],
            [{value: 1, title: 'First Floor'},{value: 2, title: 'Second Floor'},{value: 3, title: 'Third Floor'}],
            [{value: 1, title: 'Room One'},{value: 2, title: 'Room Two'},{value: 3, title: 'Room Three'}]
        ],
        placeholder: '搜索区域'
    });

    return (
        <Container>
            <Select3 {...arr} />
        </Container>
    )
}

const Container = styled.div`
`;