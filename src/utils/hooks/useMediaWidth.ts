import { useMediaQuery } from "react-responsive";

export const useMediaWidth = ()=>{
    const isMobile: boolean = useMediaQuery({ query: '(max-width: 767px)' });
    const isTablet: boolean = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1123px)' });
    const isDesktop: boolean = useMediaQuery({ query: '(min-width: 1124px) and (max-width: 1799px)' });
    const isMonitor: boolean = useMediaQuery({ query: '(min-width: 1800px)' });

    return {isMobile, isTablet, isDesktop, isMonitor}
}