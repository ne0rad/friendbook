import socketio from "socket.io-client";
import { SOCKET_URI } from "./config";
import React from "react";

export const socket = socketio.connect(SOCKET_URI);
export const SocketContext = React.createContext();

export const UserContext = React.createContext();
export const CacheContext = React.createContext();
