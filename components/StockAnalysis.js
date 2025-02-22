function StockAnalysis() {
    const stocks = [
        { symbol: "AAPL", price: "150.23", change: "+2.3%" },
        { symbol: "GOOGL", price: "2,789.45", change: "-1.2%" },
        { symbol: "MSFT", price: "290.78", change: "+1.5%" }
    ];

    return (
        <div className="stock-analysis" data-name="stock-analysis">
            <h2 className="text-xl font-bold mb-4">Live Stock Market Analysis</h2>
            <div className="space-y-2">
                {stocks.map(stock => (
                    <div 
                        key={stock.symbol}
                        className="flex justify-between items-center p-2 border-b"
                        data-name={`stock-${stock.symbol}`}
                    >
                        <span className="font-bold">{stock.symbol}</span>
                        <span>${stock.price}</span>
                        <span className={stock.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                            {stock.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
