import MyHeaderBackButton from "@/components/MyHeaderBackButton";
import AnalysisVedio from "@/pages/lookVedio/AnalysisVedio";
import HomeScreen from "@/pages/HomeScreen";
import HomeVedio from "@/pages/lookVedio/HomeVedio";
import ListScreen from "@/pages/lookVedio/ListScreen";
import { Button } from "react-native";

const childrenOption={
    headerStyle: {
        backgroundColor: '#2196F3',
    },
    headerLeft: ()=><MyHeaderBackButton/>,
}

export default {
    name: "Vedio",
    headerLeft: ()=><MyHeaderBackButton/>,
    headerShown:false,
    children: [
        {
            name: "vedioList",
            component: ListScreen,
            options: {
                title: '可以解析的视频通道',
                ...childrenOption
            }
        },
        {
            name: "homeVedio",
            component: HomeVedio,
            options: ({ navigation, route }) => {
                return {
                    headerTitle: route.params?.title,
                    ...childrenOption
                };
            }
        },
        {
            name: "analysisVedio",
            component: AnalysisVedio,
            options: ({ navigation, route }) => {
                return {
                    headerTitle: route?.params?.url,
                    ...childrenOption
                };
            }
        }
    ]
}