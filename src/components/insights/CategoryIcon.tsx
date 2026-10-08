import { Brain, DIIcon, Globe, GrowthIcon, PortfolioIconTwo, WalletIcon, Web3Icon } from "../icons";

export default function CategoryIcon({ category }: { category: string }) {
  switch (category.toLowerCase()) {
    case "artificial intelligence": return <Brain />;
    case "venture building": return <PortfolioIconTwo />;
    case "financial technology": return <WalletIcon />;
    case "digital infrastructure": return <DIIcon />;
    case "web3": return <Web3Icon />;
    case "african technology": return <Globe />;
    case "quantitative markets":
    case "quantitave markets": return <GrowthIcon />;
    default: return <PortfolioIconTwo />;
  }
}
