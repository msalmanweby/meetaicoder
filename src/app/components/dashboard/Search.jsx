"use client";
import Image from 'next/image';

function Search({ query, placeholder, handleQuery }) {

    return (
        <div className="flex w-[400px] p-2 justify-between items-center border-2 border-white rounded-[10px]">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={handleQuery}
                className="text-white placeholder:text-white bg-transparent outline-none"
            />
            <button>
                <Image 
                    src={"/dashboard/search/search.svg"} 
                    width={24} 
                    height={24} 
                    alt='search' 
                />
            </button>
        </div>
    );
}

export default Search;
