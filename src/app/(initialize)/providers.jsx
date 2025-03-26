import { AntdRegistry } from '@ant-design/nextjs-registry';

function composeProviders(providers) {
    return function ComposedProviders({ children }) {
        return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, children);
    };
}

const CombinedProviders = composeProviders([AntdRegistry]);

const Providers = ({ children }) => {
    return <CombinedProviders>{children}</CombinedProviders>;
};

export default Providers;