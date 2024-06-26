"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TopHeadline from "../../components/dashboard/TopHeadline";
import Search from "../../components/dashboard/Search";
import Refresh from "../../components/dashboard/Refresh";
import baseUrl from "../../components/UrlPatterns";
import ResultsCount from "../../components/dashboard/ResultsCount";
import AllQouteEntries from "../../components/dashboard/AllQouteEntries";

export default function Page() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);
  const [Bearer, setBearer] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedBearer = localStorage.getItem("Bearer") || null;
    setBearer(storedBearer);
    if (!storedBearer) {
      router.push("/signin/admin");
    }
  }, [router]);

  const fetchData = async () => {
    console.log(Bearer);
    const response = await fetch(`${baseUrl}info/getAllQuoteRequests/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Bearer}`,
      },
    });

    const data = await response.json();
    if (response.status === 200) {
      setData(data);
      setQuery("");
    } else {
      setError(!error);
    }
  };

  useEffect(() => {
    if (Bearer) {
      fetchData();
    }
  }, [Bearer]);

  useEffect(() => {
    const result = handleSearch(data, query);
    setFilteredResults(result);
  }, [query, data]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  function handleSearch(data, companyName) {
    const searchQuery = companyName.toLowerCase();
    return data.filter((item) =>
      item.company.toLowerCase().includes(searchQuery)
    );
  }

  return (
    <div className="flex flex-col h-screen w-full gap-0">
      <TopHeadline heading="Demo Requests" />
      <div className="flex justify-between items-center px-8 py-4">
        <Search
          query={query}
          setQuery={setQuery}
          placeholder={"Search Organizations"}
          handleQuery={handleQuery}
        />
        <Refresh handleRefresh={fetchData} />
      </div>
      <div className="flex justify-between items-center px-8 py-4">
        <ResultsCount
          count={
            filteredResults.length > 0 ? filteredResults.length : data.length
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center px-8 h-screen overflow-y-auto">
        {filteredResults.length > 0
          ? filteredResults.map((item, index) => (
              <AllQouteEntries key={index} item={item} />
            ))
          : data.map((item, index) => (
              <AllQouteEntries key={index} item={item} />
            ))}
      </div>
    </div>
  );
}
