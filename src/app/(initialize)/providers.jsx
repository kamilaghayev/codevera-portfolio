import { ThemeStoreProvider } from '@/features/change-theme/change-theme.provider';
import { AntdRegistry } from '@ant-design/nextjs-registry';

function composeProviders(providers) {
    return function ComposedProviders({ children }) {
        return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
    };
}

const CombinedProviders = composeProviders([AntdRegistry, ThemeStoreProvider]);

const Providers = ({ children }) => {
    return <CombinedProviders>{children}</CombinedProviders>;
};

export default Providers;