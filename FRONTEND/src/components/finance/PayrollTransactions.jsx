import { MoreVertical } from 'lucide-react';
import { payrollTransactions } from '../../data/financeMockData';

function EmployeeAvatar({ person }) {
  const fallback = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='32' fill='%23D8F0E1'/%3E%3Ctext x='50%25' y='56%25' text-anchor='middle' fill='%230B3B2E' font-family='Arial' font-size='21' font-weight='700'%3E${person.initials}%3C/text%3E%3C/svg%3E`;
  const photoUrl = `https://i.pravatar.cc/80?img=${person.avatar}`;
  return <img className="finance-employee-avatar" src={import.meta.env.DEV ? fallback : photoUrl} data-photo-source={photoUrl} alt={person.name} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallback; }} />;
}

export default function PayrollTransactions() {
  return (
    <article className="finance-panel finance-transactions-panel">
      <h2 className="finance-panel-title">Recent Payroll Transactions</h2>
      <div className="finance-table-wrap">
        <table className="finance-transactions-table">
          <thead><tr><th>Employee Name</th><th>Emp ID</th><th>Department</th><th>Designation</th><th>Gross Pay</th><th>Deductions</th><th>Net Pay</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>{payrollTransactions.map((person) => (
            <tr key={person.id}>
              <td><span className="finance-employee-cell"><EmployeeAvatar person={person} /><strong>{person.name}</strong></span></td>
              <td>{person.id}</td><td>{person.department}</td><td>{person.designation}</td><td>{person.gross}</td><td>{person.deductions}</td><td>{person.net}</td>
              <td><span className={`finance-status-badge ${person.status === 'Processed' ? 'is-processed' : 'is-pending'}`}>{person.status}</span></td>
              <td><span className="finance-row-action"><button type="button">View</button><MoreVertical size={15} /></span></td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <div className="finance-table-footer"><span>Showing 1 - 5 of 98 employees</span><nav aria-label="Transaction pages"><button type="button" aria-label="Previous page">‹</button><button className="is-current" type="button">1</button><button type="button">2</button><button type="button">3</button><button type="button">4</button><button type="button">5</button><span>...</span><button type="button">20</button><button type="button" aria-label="Next page">›</button></nav></div>
    </article>
  );
}