import { FC, ReactNode } from "react";

const Hello: FC<{ children?: ReactNode }> = ({ children }) => <h1 className="title is-1">{children}</h1>

export default Hello;