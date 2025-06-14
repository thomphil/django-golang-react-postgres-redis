package main

import (
    "net/http/httptest"
    "net/http"
    "testing"

    "github.com/gorilla/websocket"
)

func TestWsHandlerEcho(t *testing.T) {
    server := httptest.NewServer(http.HandlerFunc(wsHandler))
    defer server.Close()

    url := "ws" + server.URL[4:]
    ws, _, err := websocket.DefaultDialer.Dial(url, nil)
    if err != nil {
        t.Fatalf("dial: %v", err)
    }
    defer ws.Close()

    msg := "hello"
    if err := ws.WriteMessage(websocket.TextMessage, []byte(msg)); err != nil {
        t.Fatalf("write: %v", err)
    }

    _, resp, err := ws.ReadMessage()
    if err != nil {
        t.Fatalf("read: %v", err)
    }
    if string(resp) != msg {
        t.Fatalf("expected %s, got %s", msg, string(resp))
    }
}

