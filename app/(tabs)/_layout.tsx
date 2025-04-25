import { Tabs } from "expo-router";

export default function TabLayout() {
    return(
    <Tabs>
        <Tabs.Screen
        name="index"
        options={{
            title: 'Home',
            headerShown: false
        }}
        />
        <Tabs.Screen
        name="sort"
        options={{
            title: 'Sorting',
            headerShown: false
        }}
        />,
        <Tabs.Screen
        name="graph"
        options={{
            title: 'Graphing',
            headerShown:false
        }}
        />
    </Tabs>
    );
}