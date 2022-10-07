package main

import (
	"github.com/korandoru/open-source-town/api"
	"net/http"
)

func main() {
	http.HandleFunc("/api/active_contributors_selected", api.ActiveContributorsSelectedHandle)
	if err := http.ListenAndServe("localhost:8080", nil); err != nil {
		panic(err)
	}
}
