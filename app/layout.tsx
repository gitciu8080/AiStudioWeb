import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '人工智能工作室招新｜广东交通职业技术学院',
  description: '以竞赛为引擎，把课堂知识变成真实项目。加入信息学院人工智能工作室，与我们一起学习、创造、站上赛场。',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
