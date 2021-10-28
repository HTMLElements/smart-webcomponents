namespace Framework
{
  //Colour Difference Formula objects
  public class CDF
  {
    public string illuminant { get; set; }
    public string observer { get; set; }
    public string primary { get; set; }
    public string textile { get; set; }
    public string source1 { get; set; }
    public string notation1 { get; set; }
    public string source2 { get; set; }
    public string notation2 { get; set; }
    public string sample1 { get; set; }
    public string sample2 { get; set; }
    public double CIE94 { get; set; }
    public double CIED2000 { get; set; }
    public double CIELab { get; set; }
    public double CIELuv { get; set; }
    public double CMC { get; set; }
    public double DIN99 { get; set; }
    public double FMC1 { get; set; }
    public double FMC2 { get; set; }
    public double HunterLab { get; set; }
    public string status { get; set; }

    public CDF()
    {
      notation1 = "";
      notation2 = "";
      CIE94 = 0;
      CIED2000 = 0;
      CIELab = 0;
      CIELuv = 0;
      CMC = 0;
      DIN99 = 0;
      FMC1 = 0;
      FMC2 = 0;
      HunterLab = 0;
    }
  }

  public class CDF2
  {
    public string Colour1 { get; set; }
    public string Colour2 { get; set; }

    public CDF2()
    {
      Colour1 = "#FFFFFF";
      Colour2 = "#000000";
    }
  }
}
