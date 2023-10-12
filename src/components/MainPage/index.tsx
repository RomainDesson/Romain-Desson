import {LeftSideContainer, MainPageContainer, RightSideContainer} from "./style.ts";
import {RightSide} from "./RightSide";
import {LeftSide} from "./LeftSide";

export const MainPage = () => {
    return (
        <MainPageContainer>
            <LeftSideContainer>
                <LeftSide/>
            </LeftSideContainer>
            <RightSideContainer>
                <RightSide />
            </RightSideContainer>
        </MainPageContainer>
    )
}
