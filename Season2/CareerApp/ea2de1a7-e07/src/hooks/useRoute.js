import { APP_PAGE } from "../constans/constans";
import { useRouter } from "@store/router"
import { useEffect } from "react";

export const useRoute = () => {
  const { path, setPath, navigate, goBack } = useRouter();


  const addQueryParam = (keyParam, valueParam) => {
    const newQueryParams = new URLSearchParams(window.location.search)
    newQueryParams.set(keyParam, valueParam)
    const newURL = `${window.location.pathname}?${newQueryParams}`
    window.history.replaceState({ path: newURL }, '', newURL)
  }

  const addCheckboxQueryParam = (dep) => {
    const newQueryParams = new URLSearchParams()
    dep.forEach(entries => {
      if (entries.withOutUrl) {
        return
      }
      newQueryParams.append(entries.query, entries.id)
    });
    const newURL = `${window.location.pathname}?${newQueryParams}`
    window.history.pushState({ path: newURL }, '', newURL)
  }

  const removeQueryParam = (keyParam) => {
    try {
      const url = new URL(window.location.href)
      url.searchParams.delete(keyParam)
      window.history.replaceState(null, '', url.toString())
    } catch (error) {
      console.error('Failed to modify URL:', error)
    }
  }

  const resetQueryParam = () => {
    const newURL = window.location.pathname
    window.history.pushState({ path: newURL }, '', newURL)
  }

  useEffect(() => {
    if (path === '/') {
      navigate(APP_PAGE.main)
    }
    const onPopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return {
    path,
    setPath,
    navigate,
    goBack,
    addQueryParam,
    removeQueryParam,
    addCheckboxQueryParam,
    resetQueryParam
  }
}