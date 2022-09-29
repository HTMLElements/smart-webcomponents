using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Data
{

    public partial class StockRecord
    {
        public string Code { get; set; }
        public double Buy { get; set; }
        public int Volume { get; set; }
        public DateTime Date { get; set; }
    }
    public partial class BillingRecord
    {
        public DateTime Date { get; set; }
        public double Amount { get; set; }
        public string Description { get; set; }
        public string Status { get; set; }
    }

    public partial class DataRecord
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public string PetName { get; set; }
        public string Country { get; set; }
        public string ProductName { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public DateTime TimeOfPurchase { get; set; }
        public bool Expired { get; set; }
        public string Attachments { get; set; }
    }

    public class DataService
    {
        public List<StockRecord> GenerateStockData(int length)
    {
        List<StockRecord> sampleData = new List<StockRecord>();
        string[] codes = new string[] { "AAC", "AAD", "AAX", "ABC", "ABP", "ABY", "ACR", "ADU", "AGG", "AGK", "AGO" };
        for (int i = 0; i < length; i++)
        {
            StockRecord data = new StockRecord()
            {
                Code = codes[new Random().Next(codes.Length)],
                Buy = new Random().NextDouble() * 100 + 1,
                Volume = new Random().Next(100) + 1,
                Date = new DateTime(2021, 1 + new Random().Next(10), 1 + new Random().Next(28))
            };
            sampleData.Add(data);
        }
        return sampleData;
    }

        public List<BillingRecord> GenerateBillingData(int length)
    {
        List<BillingRecord> sampleData = new List<BillingRecord>();
        string[] subscriptions = new string[] { "Netflix", "HBO Go", "Amazon Prime" };
        string[] statuses = new string[] { "Failed", "Successful" };
        for (int i = 0; i < length; i++)
        {
            BillingRecord data = new BillingRecord()
            {
                Date = new DateTime(2021, 1 + new Random().Next(10), 1 + new Random().Next(28)),
                Amount = new Random().NextDouble() * 100 + 1,
                Description = subscriptions[new Random().Next(subscriptions.Length)] + " subscription",
                Status = statuses[new Random().Next(statuses.Length)]
            };
            sampleData.Add(data);
        }
        return sampleData;
    }
 
        public List<DataRecord> GenerateData(int length)
    {
        List<DataRecord> sampleData = new List<DataRecord>();
        string[] firstNames = new string[] { "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Elio", "Beate", "Cheryl", "Michael", "Guylene" };
        string[] lastNames = new string[] { "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier" };
        string[] petNames = new string[] { "Sam", "Bob", "Lucky", "Tommy", "Charlie", "Olliver", "Mixie", "Fluffy", "Acorn", "Beak" };
        string[] countries = new string[] { "Bulgaria", "USA", "UK", "Singapore", "Thailand", "Russia", "China", "Belize" };
        string[] productNames = new string[] { "Black Tea", "Green Tea", "Caffe Espresso", "Doubleshot Espresso", "Caffe Latte", "White Chocolate Mocha", "Cramel Latte", "Caffe Americano", "Cappuccino", "Espresso Truffle", "Espresso con Panna", "Peppermint Mocha Twist" };
        for (int i = 0; i < length; i++)
        {
            DataRecord data = new DataRecord()
            {
                FirstName = firstNames[new Random().Next(firstNames.Length)],
                LastName = lastNames[new Random().Next(lastNames.Length)],
                Birthday = new DateTime(2021, 1 + new Random().Next(10), 1 + new Random().Next(28)),
                PetName = petNames[new Random().Next(petNames.Length)],
                ProductName = productNames[new Random().Next(productNames.Length)],
                Country = countries[new Random().Next(countries.Length)],
                Price = new Random().NextDouble() * 100 + 1,
                Quantity = new Random().Next(100) + 1,
                TimeOfPurchase = new DateTime(2021, 1 + new Random().Next(10), 1 + new Random().Next(28)),
                Expired = new Random().NextDouble() > 0.5,
                Attachments = ""
            };
            int maxAttachments = new Random().Next(3) + 1;
            for (int j = 0; j < maxAttachments; j++)
            {
                data.Attachments += "https://www.htmlelements.com/demos//images/travel/" + new Random().Next(1, 30).ToString() + ".jpg";
                if (j < maxAttachments - 1)
                {
                    data.Attachments += ", ";
                }
            }
            sampleData.Add(data);
        }
        return sampleData;
    }

        public Task<DataRecord[]> GetDataAsync(int length)
		{
			List<DataRecord> records = GenerateData(length);

			return Task.FromResult(records.ToArray());
		}
    }
}