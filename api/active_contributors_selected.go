package api

import (
	"fmt"
	"net/http"
)

func ActiveContributorsSelectedHandle(w http.ResponseWriter, r *http.Request) {
	_, _ = fmt.Fprintf(w, "<h1>Hello from Go!</h1>")
}
