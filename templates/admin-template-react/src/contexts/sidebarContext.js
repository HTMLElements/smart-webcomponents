import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarProvider = (
    { children, primaryContainerRef, secondaryContainerRef, sidebarRef, toggleCollapsedSidebarRef }
) => {

    const [sidebarState, setSidebarState] = useState({
        collapsed: false,
        autoCollapsed: false
    })

    const collapseOnWindowResize = useCallback(() => {

        const windowWidth = window.innerWidth;

        if (sidebarRef) { sidebarRef.current.style.transition = 'none'; }
        if (secondaryContainerRef) { secondaryContainerRef.current.style.transition = 'none' }

        if (!sidebarState.collapsed && windowWidth < 992) {

            setSidebarState({
                collapsed: true,
                autoCollapsed: true
            })

        } else if (sidebarState.autoCollapsed && windowWidth >= 992) {

            setSidebarState({
                collapsed: false,
                autoCollapsed: false
            });

        }

        if (sidebarState.collapsed) {
            toggleCollapsedSidebarRef.current.checked = true;
        } else {
            toggleCollapsedSidebarRef.current.checked = false;
        }

        requestAnimationFrame(() => {
            if (sidebarRef) { sidebarRef.current.style.transition = null; }
            if (secondaryContainerRef) { secondaryContainerRef.current.style.transition = null }
        });

    }, [sidebarState, secondaryContainerRef, sidebarRef, toggleCollapsedSidebarRef]);

    useEffect(() => {

        primaryContainerRef?.current.classList.toggle('collapsed', sidebarState.collapsed);

    }, [sidebarState, primaryContainerRef]);

    useEffect(() => {

        collapseOnWindowResize();
        window.onresize = collapseOnWindowResize;

    }, [collapseOnWindowResize]);

    return (
        <SidebarContext.Provider value={{
            sidebarState,
            setSidebarState
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidbarContext = () => useContext(SidebarContext);