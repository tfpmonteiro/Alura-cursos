using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank.Funcionarios
{
    public class Funcionario
    {
        public string Nome { get; set; }
        public string CPF { get; private set; }
        public double Salario { get; set; }
        public static int TotalFuncionarios { get; private set; }

        public Funcionario(double salario, string cpf)
        {
            Console.WriteLine("CRIANDO UM FUNCIONÁRIO...");

            Salario = salario;
            CPF = cpf;

            TotalFuncionarios++;
        }

        public virtual double GetBonificacao()
        {
            return Salario * 0.10;
        }

        public virtual void AumentarSalario()
        {
            Salario *= 1.1;
        }

    }
}
