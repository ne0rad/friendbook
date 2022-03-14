import socketio from "socket.io-client";
import { API_URL } from "./config";
import React from "react";

export const socket = socketio.connect(API_URL);
export const SocketContext = React.createContext();

export const UserContext = React.createContext();
export const CacheContext = React.createContext();
