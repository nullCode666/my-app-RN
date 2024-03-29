import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/pages/HomeScreen';
import lookVedio from './lookVedio';
import MyHeaderBackButton from '@/components/MyHeaderBackButton';
import { useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();


export default () => {

    const routers = useRef([lookVedio]);


    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                
                options={{
                    title: '首页',
                    headerLeft: ()=><Icon name="apps-outline" size={25} color="#fff" />,
                    headerStyle: {
                        backgroundColor: '#2196F3',
                    },
                }}
            />
            {
                routers.current.map(router => (
                    <Stack.Screen key={router.name} name={router.name} 
                    options={{
                        headerShown: router?.headerShown  // 隐藏父导航器的标题栏
                      }}>
                        {() => (
                            <Stack.Navigator >
                                {router.children.map((item,index) => <Stack.Screen key={router.name+index} name={item.name}  component={item.component} options={item?.options} />)}
                            </Stack.Navigator>
                        )}
                    </Stack.Screen>
                ))
            }
            {/* <Stack.Screen
                name="vedioList"
                component={ListScreen}
                options={{
                    title: '可以解析的视频通道',
                    headerStyle: {
                        backgroundColor: '#2196F3',
                    },
                }}
            />
            <Stack.Screen
                name="homeVedio"
                component={HomeVedio}
                options={({ navigation, route }) => {
                    return {
                        headerTitle: route.params?.title
                    };
                }}
            />
            <Stack.Screen
                name="analysisVedio"
                component={AnalysisVedio}
                options={({ navigation, route }) => {
                    return {
                        headerTitle: route?.params?.url,
                        headerRight: () => (
                            <Button
                                title="返回"
                                onPress={() => navigation.navigate('homeVedio', { url: route?.params?.url })}></Button>
                        ),
                    };
                }}
            /> */}
        </Stack.Navigator>
    );
}