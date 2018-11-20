using ByteBank.Funcionarios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            GerenciadorBonificacao gerenciador = new GerenciadorBonificacao();

            Funcionario carlos = new Funcionario();
            carlos.Nome = "Carlos";
            carlos.CPF = "546.985.781-98";
            carlos.Salario = 2000;

            Diretor roberta = new Diretor();
            roberta.Nome = "Roberta";
            roberta.CPF = "458.859.987-88";
            roberta.Salario = 5000;

            gerenciador.Registrar(carlos);
            gerenciador.Registrar(roberta);

            Console.WriteLine($"Total de bonificações: R${gerenciador.GetTotalBonificacao()}");
            Console.ReadKey();
        }
    }
}
