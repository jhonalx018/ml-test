import React, { useState, ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';

export default (): ReactElement => {
  const router = useRouter();
  const basePath = '/items';
  const [inputValue, setInputValue] = useState('');

  const handleChange = ({ target: { value } }: any) => {
    setInputValue(value);
  };

  const redirectToSearch = () => {
    const queryParams = new URLSearchParams({
      search: inputValue,
    }).toString();

    router.push(`${basePath}?${queryParams}`);
  };

  const handleKeyPress = ({ key }: any) => {
    if (key === 'Enter' && inputValue.trim()) {
      redirectToSearch();
    }
  };

  const handleClickToSearch = () => {
    if (inputValue.trim()) {
      redirectToSearch();
    }
  };

  useEffect(() => {
    if (router?.query?.search) {
      setInputValue(router.query?.search.toString());
    }
  }, [router?.query]);

  return (
    <div className="search__content">
      <div className="body-content">
        <figure className="search__content-input">
          <img
            alt="mercado-libre-logo"
            src="/Logo_ML@2x.png"
            width={43}
            height={33}
          />
          <div className="search__content-inner-input">
            <input
              name="search"
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              className="search__input"
              placeholder="Nunca dejes de buscar!"
              value={inputValue}
            />
            <button type="button" className="search__search-icon" onClick={handleClickToSearch}>
              <img
                alt="mercado-libre-search"
                src="/ic_Search@2x.png"
                width={18}
                height={18}
                aria-label="Buscador de productos mercado libre"
              />
            </button>
          </div>
        </figure>
      </div>
    </div>
  );
};
