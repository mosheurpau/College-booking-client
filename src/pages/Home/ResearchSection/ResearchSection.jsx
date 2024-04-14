import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";

const ResearchSection = () => {
  // Sample data of research paper links
  const researchPapers = [
    {
      title: "A Survey on Explainable AI for Natural Language Processing (NLI)",
      author: "Y. Chen, X. Liu, M. Sun, Z. Zhao, & D. Yin (2023)",
      link: "https://arxiv.org/abs/2010.00711",
    },
    {
      title: "Federated Learning for Privacy-Preserving AI",
      author: "H. Zhu, J. Liu, X. Chen, & B. Li (2023)",
      link: "https://www.researchgate.net/publication/347577077_Federated_learning_for_privacy-preserving_AI",
    },
    {
      title: "Generative AI for Design Automation",
      author: "J. Yu, Z. Lin, C. Liu, & X. Wang (2023)",
      link: "https://arxiv.org/list/cs.LG/recent",
    },
    {
      title: "Quantum Machine Learning: A Survey",
      author: "Z. D. Wang, H. Y. Xiong, & M. H. Yung (2023)",
      link: "https://ieeexplore.ieee.org/document/10059764/",
    },
    {
      title: "The Rise of Large Language Models (LLMs)",
      author: "I. Goodfellow, R. Kindermans, K. Kurach, & A. Courville (2016)",
      link: "https://www.deeplearningbook.org/",
    },
    {
      title: "A Survey on Explainable Reinforcement Learning (RL)",
      author: "Y. Luo, Y. Chen, C. Li, Y. E, & J. Peng (2023)",
      link: "https://arxiv.org/abs/2211.06665",
    },
    {
      title: "Cybersecurity in the Age of AI and Machine Learning (ML)",
      author: "A. Meneghello, F. Pagnin, & D. Rossoni (2023)",
      link: "https://ieeexplore.ieee.org/document/9753967",
    },
    {
      title: "The Ethical Implications of Artificial Intelligence (AI)",
      author: "B. Mittelstadt, P. Wachter, & L. Floridi (2019)",
      link: "https://www.researchgate.net/publication/368449936_The_Ethical_Implications_of_Artificial_Intelligence_AI_For_Meaningful_Work",
    },
    {
      title: "Natural Language Processing with Deep Learning",
      author: "Y. Goldberg (2017)",
      link: "https://link.springer.com/book/10.1007/978-3-031-02165-7",
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Sectiontitle heading={"Recommended Research Papers"}></Sectiontitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {researchPapers.map((paper, index) => (
            <div key={index} className=" border-2 rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
              <p className="text-sm text-gray-600 mb-2">By {paper.author}</p>
              <a
                href={paper.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
