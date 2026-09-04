import { ArrowDown, ArrowUpRight, Award, Binary, Bot, BrainCircuit, ChevronRight, Eye, GraduationCap, Network, QrCode, Rocket, Sparkles, Swords, Terminal, Zap } from 'lucide-react';

const awards = [
  { year: '2025', level: '国家级奖项', title: '中国青年科技创新“揭榜挂帅”擂台赛', result: '人工智能领域主擂台赛 · 国赛三等奖', detail: '参赛作品《智盾战场智能攻防实验平台》，以 AI Agent 驱动动态攻防推演。', link: 'https://mp.weixin.qq.com/s/fjFbjbPfpuygph0YHLSX9w' },
  { year: '2025', level: '金砖技能大赛', title: '第二届智能体构建与应用赛项', result: '教工组一等奖 · 高职组一等奖、三等奖', detail: '学院同时获评最佳组织奖，在大模型运用、智能体构建与场景应用中展现实力。', link: 'https://mp.weixin.qq.com/s/ZLsm4D6kawFhjODuEhsLvg' },
  { year: '2024', level: '金砖技能大赛', title: '智能体构建与应用赛项', result: '学生组两项一等奖 · 教师组二等奖', detail: '以扎实训练与团队协作，在全国赛场完成从知识学习到真实项目交付的跨越。', link: 'https://mp.weixin.qq.com/s/vNxm1pQGpbWt3UrmyfS9pg' },
];

const tracks = [
  { icon: Terminal, no: '01', name: 'Python 编程', copy: '从语法与算法开始，把想法写成可运行的程序。', link: 'https://mp.weixin.qq.com/s/C-LbMTdcrdqGBL2bgWSafA' },
  { icon: Eye, no: '02', name: '计算机视觉', copy: '学习图像处理、OpenCV 与视觉模型，解决真实场景问题。', link: 'https://mp.weixin.qq.com/s/46axRw5McowdA2BCHiueiA' },
  { icon: Binary, no: '03', name: '大数据技术', copy: '理解数据基础，训练分析能力，为智能应用打好地基。', link: 'https://mp.weixin.qq.com/s/LOerakPE5DH19Q69dS-pqg' },
];

const process = [
  ['01', '加入与启航', '零基础也可以。我们更看重好奇心、行动力和持续投入。'],
  ['02', '训练与组队', '跟随方向训练，和伙伴一起完成小项目、复盘与迭代。'],
  ['03', '备赛与实战', '围绕真实赛题拆解任务，在老师指导下冲刺高水平竞赛。'],
  ['04', '沉淀与传承', '把经验变成教程、题库和分享，带下一届走得更远。'],
];

export default function Home() {
  return <main>
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="返回首页"><span className="brand-mark"><BrainCircuit size={23} strokeWidth={1.8}/></span><span><strong>AI STUDIO</strong><small>人工智能工作室</small></span></a>
      <nav aria-label="主导航"><a href="#about">关于我们</a><a href="#honors">竞赛荣誉</a><a href="#tracks">成长方向</a></nav>
      <a className="nav-cta" href="#join">加入工作室 <ArrowUpRight size={16}/></a>
    </header>

    <section className="hero" id="top">
      <div className="grid-plane" aria-hidden="true"/><div className="hero-glow glow-a" aria-hidden="true"/><div className="hero-glow glow-b" aria-hidden="true"/>
      <div className="hero-copy">
        <div className="eyebrow"><span className="live-dot"/> 广东交通职业技术学院 · 信智学院</div>
        <h1>和一群认真的人，<br/><em>做真正的 AI。</em></h1>
        <p>这里不是旁观席。我们以竞赛为引擎，把课堂知识变成项目，把一次次训练变成站上赛场的底气。</p>
        <div className="hero-actions"><a className="button primary" href="#join">开启你的 AI 赛道 <Rocket size={18}/></a><a className="button ghost" href="#honors">看看我们做到了什么 <ArrowDown size={18}/></a></div>
        <div className="hero-proof"><span><Award size={17}/> 竞赛驱动</span><span><Network size={17}/> 项目协作</span><span><GraduationCap size={17}/> 师生共创</span></div>
      </div>
      <div className="hero-visual" aria-label="人工智能竞赛工作室视觉">
        <img src="/ai-studio-competition-hero.png" alt="人工智能工作室成员共同准备技术竞赛"/>
        <div className="scanner" aria-hidden="true"/><div className="corner corner-tl"/><div className="corner corner-br"/>
        <div className="data-card card-one"><Terminal size={20}/><span>MODEL TRAINING</span><b>98.7%</b></div>
        <div className="data-card card-two"><Swords size={20}/><span>COMPETITION</span><b>READY</b></div>
      </div>
      <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></div>
    </section>

    <div className="signal-strip" aria-hidden="true"><div><span>AI AGENT</span><i/><span>COMPUTER VISION</span><i/><span>PYTHON</span><i/><span>BIG DATA</span><i/><span>AI AGENT</span><i/><span>COMPUTER VISION</span><i/><span>PYTHON</span><i/><span>BIG DATA</span><i/></div></div>

    <section className="section about" id="about">
      <div className="section-kicker"><span>01</span> WHO WE ARE</div>
      <div className="about-grid"><div><h2>不只学习技术，<br/>更要把技术<span>带上赛场。</span></h2></div><div className="about-copy">
        <p className="lead">人工智能工作室，是广东交通职业技术学院信智学院面向 AI 实践与学科竞赛的学生成长平台。</p>
        <p>我们坚持“以赛促学、以赛促教”。从 Python、计算机视觉、大数据到智能体应用，在一次次训练、组队和复盘中，把零散知识连接成解决问题的能力。</p>
        <div className="principles"><div><Bot size={24}/><strong>前沿方向</strong><small>紧跟 AI 技术与产业应用</small></div><div><Swords size={24}/><strong>竞赛实战</strong><small>以真实赛题锤炼硬实力</small></div><div><Sparkles size={24}/><strong>共同成长</strong><small>有分享，也有并肩作战</small></div></div>
      </div></div>
    </section>

    <section className="section honors" id="honors">
      <div className="section-heading"><div><div className="section-kicker light"><span>02</span> RECENT HONORS</div><h2>赛场，是我们的<br/><span>第二间教室。</span></h2></div><p>每一份荣誉背后，都是无数次调试、推翻和重来。我们不只展示结果，也传承抵达结果的方法。</p></div>
      <div className="award-list">{awards.map((award,index)=><a className="award-card reveal" href={award.link} target="_blank" rel="noreferrer" key={award.title+award.year}>
        <div className="award-index">0{index+1}</div><div className="award-year">{award.year}<small>{award.level}</small></div><div className="award-main"><h3>{award.title}</h3><strong>{award.result}</strong><p>{award.detail}</p></div><div className="circle-link"><ArrowUpRight size={22}/></div>
      </a>)}</div>
      <p className="source-note"><ArrowUpRight size={14}/> 点击荣誉卡片可查看学院官方推文原文</p>
    </section>

    <section className="section tracks" id="tracks">
      <div className="section-heading dark-text"><div><div className="section-kicker"><span>03</span> OUR ARENAS</div><h2>从校内练兵，<br/>到更大的赛场。</h2></div><p>工作室承办面向信智学院学生的技能竞赛，让更多同学拥有一次低门槛、高反馈的实战起点。</p></div>
      <div className="track-grid">{tracks.map(({icon:Icon,...track})=><a href={track.link} target="_blank" rel="noreferrer" className="track-card reveal" key={track.name}>
        <div className="track-top"><span>{track.no}</span><ArrowUpRight size={20}/></div><Icon size={42} strokeWidth={1.35}/><h3>{track.name}</h3><p>{track.copy}</p><span className="text-link">查看竞赛推文 <ChevronRight size={16}/></span>
      </a>)}</div>
    </section>

    <section className="section path"><div className="section-kicker"><span>04</span> YOUR PATH</div><div className="path-layout">
      <div className="path-title"><h2>你的成长，<br/>从<span>第一次提交</span>开始。</h2><p>不用等到“准备好了”。来到这里，边做、边学、边赢。</p></div>
      <div className="steps">{process.map(([no,title,copy])=><div className="step reveal" key={no}><span>{no}</span><div><h3>{title}</h3><p>{copy}</p></div></div>)}</div>
    </div></section>

    <section className="join" id="join"><div className="join-icon"><Zap size={34} strokeWidth={1.5}/></div><p>NEW MEMBERS WANTED</p><h2>下一次站上领奖台的人，<br/>为什么不能是你？</h2><p className="join-copy">欢迎对人工智能、编程与技术竞赛有兴趣的同学。关注信智学院通知，或前往工作室咨询招新安排。</p><figure className="qr-placeholder"><div className="qr-frame"><img src="/招新新群二维码.jpg" alt="人工智能工作室招新群二维码"/></div><figcaption><strong>扫描进群</strong><span className="qr-hold-tip">手机端请长按二维码加群</span></figcaption></figure><div className="join-actions"><a className="button primary light-button" href="#top">现在，向前一步 <ArrowUpRight size={19}/></a><a className="button primary light-button qr-button" href="/招新新群二维码.jpg" target="_blank" rel="noreferrer">打开加群二维码 <ArrowUpRight size={19}/></a></div><div className="join-tags"><span># 不限基础</span><span># 重视行动</span><span># 长期主义</span></div></section>

    <footer><div className="brand footer-brand"><span className="brand-mark"><BrainCircuit size={23}/></span><span><strong>AI STUDIO</strong><small>广东交通职业技术学院 · 信智学院</small></span></div><p>以赛促学 · 以创促用 · 以技术抵达更远的地方</p><a href="#top">BACK TO TOP <ArrowUpRight size={14}/></a></footer>
  </main>;
}
