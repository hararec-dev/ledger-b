import { PropsWithChildren } from "react";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
    title: string;
}>;

export const Section = ({ children, title }: SectionProps): React.JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? '#F5F5F5' : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? '#F5F5F5' : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
        backgroundColor: '#121212'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
});