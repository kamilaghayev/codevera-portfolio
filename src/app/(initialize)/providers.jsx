import { ThemeStoreProvider } from '@/features/change-theme/change-theme.provider';
import { AntdRegistry } from '@ant-design/nextjs-registry';

function composeProviders(providers) {
    return function ComposedProviders({ children }) {
        return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
    };
}
const AntdTheme = ({children}) => {
    return (
        <AntdRegistry
            theme={{
                token: {
                    colorPrimary: '#8ac44f'
                }
            }}
        >
            {children}
        </AntdRegistry>
    )
}
const CombinedProviders = composeProviders([AntdTheme, ThemeStoreProvider]);

const Providers = ({ children }) => {
    return <CombinedProviders>{children}</CombinedProviders>;
};

export default Providers;