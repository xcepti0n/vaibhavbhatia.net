import React from 'react';
import CodeBlock from '../../components/CodeBlock';

const LocalLLMBenchBlogContent: React.FC = () => {
  return (
    <div className="prose mx-auto p-4">
      <p>
        I wanted to find the best local LLM setup for running 24/7 agents on my Apple M1 Max (32 GB).
        Rather than guessing, I built a benchmark suite called <strong>local_llm_bench</strong> that sweeps
        parameters systematically and scores each config on speed, tool-call correctness, and response
        quality. Here is what I found.
      </p>

      <h2>Hardware and Ollama Config</h2>
      <p>All runs were on:</p>
      <ul>
        <li>Chip: Apple M1 Max</li>
        <li>RAM: 32 GB unified memory</li>
        <li>Ollama 0.24.0 on macOS</li>
      </ul>
      <p>I tuned Ollama with these env vars before running anything:</p>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Value</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>OLLAMA_FLASH_ATTENTION</code></td>
            <td>1</td>
            <td>Reduces KV memory, speeds long-context</td>
          </tr>
          <tr>
            <td><code>OLLAMA_KV_CACHE_TYPE</code></td>
            <td>q8_0</td>
            <td>8-bit KV cache, halves VRAM vs f16 with minimal quality loss</td>
          </tr>
          <tr>
            <td><code>OLLAMA_NUM_PARALLEL</code></td>
            <td>1</td>
            <td>Single request at a time to maximise per-request tok/s</td>
          </tr>
          <tr>
            <td><code>OLLAMA_MAX_LOADED_MODELS</code></td>
            <td>3</td>
            <td>Keep 3 models hot in memory</td>
          </tr>
          <tr>
            <td><code>OLLAMA_KEEP_ALIVE</code></td>
            <td>-1</td>
            <td>Never unload models</td>
          </tr>
        </tbody>
      </table>

      <h2>What Gets Benchmarked</h2>
      <p>
        Each model is swept across a grid of parameters. Two prompts are sent per config: a thermodynamics
        question (quality) and a tool-call request (structured JSON output).
      </p>
      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Values tested</th>
            <th>Why it matters</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>num_ctx</code></td><td>16k, 32k, 64k, 128k</td><td>Agent memory and conversation history</td></tr>
          <tr><td><code>temperature</code></td><td>0.0, 0.1, 0.6</td><td>Determinism vs creativity</td></tr>
          <tr><td><code>top_p</code></td><td>0.9, 0.95</td><td>Nucleus sampling breadth</td></tr>
          <tr><td><code>top_k</code></td><td>20, 40</td><td>Token candidate pool size</td></tr>
          <tr><td><code>repeat_penalty</code></td><td>1.0, 1.1</td><td>Repetition suppression</td></tr>
          <tr><td><code>num_predict</code></td><td>256, 512</td><td>Max output tokens</td></tr>
          <tr><td><code>think</code></td><td>on, off</td><td>Native chain-of-thought mode</td></tr>
        </tbody>
      </table>

      <h3>Scoring</h3>
      <p>Each config is scored out of <strong>3.0</strong>:</p>
      <CodeBlock>
        {`score = (avg_tok/s / max_tok/s)   # 0-1, speed normalised to fastest config
      + tool_call_correct           # 0 or 1
      + quality_score / 3          # 0-1`}
      </CodeBlock>

      <h2>Models Tested</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Size</th>
            <th>Quant</th>
            <th>Max safe ctx (32 GB)</th>
            <th>Architecture</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gemma4:26b</code></td>
            <td>25.8B</td>
            <td>Q4_K_M</td>
            <td>128k</td>
            <td>MoE, Sliding Window Attention 1024</td>
          </tr>
          <tr>
            <td><code>gemma4:e4b</code></td>
            <td>8B</td>
            <td>Q4_K_M</td>
            <td>256k</td>
            <td>MoE (small), SWA 512</td>
          </tr>
          <tr>
            <td><code>qwen3.5:9b</code></td>
            <td>9.7B</td>
            <td>Q4_K_M</td>
            <td>128k</td>
            <td>Dense transformer</td>
          </tr>
          <tr>
            <td><code>Huihui-Qwen3.6-27B nvfp4</code></td>
            <td>27.4B</td>
            <td>nvfp4</td>
            <td>64k</td>
            <td>MoE, inline think blocks</td>
          </tr>
          <tr>
            <td><code>qwen3.6:27b-coding-nvfp4</code></td>
            <td>27.4B</td>
            <td>nvfp4</td>
            <td>64k</td>
            <td>MoE, coding fine-tune</td>
          </tr>
        </tbody>
      </table>

      <h3>Memory Usage by Context</h3>
      <p>
        Using q8_0 KV cache, here is how much RAM each model needs at different context sizes. Going over
        32 GB means Ollama starts offloading layers to CPU, which kills tok/s.
      </p>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>16k</th>
            <th>32k</th>
            <th>64k</th>
            <th>128k</th>
            <th>256k</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gemma4:e4b</code> (~4.5 GB)</td>
            <td>~5 GB</td>
            <td>~5 GB</td>
            <td>~6 GB</td>
            <td>~7 GB</td>
            <td>~9 GB</td>
          </tr>
          <tr>
            <td><code>gemma4:26b</code> (~15 GB)</td>
            <td>~18 GB</td>
            <td>~18 GB</td>
            <td>~21 GB</td>
            <td>~28 GB</td>
            <td>~41 GB (over limit)</td>
          </tr>
          <tr>
            <td><code>qwen3.5:9b</code> (~5.5 GB)</td>
            <td>~6 GB</td>
            <td>~6 GB</td>
            <td>~7 GB</td>
            <td>~9 GB</td>
            <td>~13 GB</td>
          </tr>
          <tr>
            <td><code>Huihui/Qwen3.6-27B nvfp4</code> (~13.7 GB)</td>
            <td>~16 GB</td>
            <td>~18 GB</td>
            <td>~22 GB</td>
            <td>~31 GB (at limit)</td>
            <td>N/A</td>
          </tr>
        </tbody>
      </table>
      <p>
        gemma4 memory is nearly flat across context sizes because its Sliding Window Attention (SWA) layers
        use a fixed-size local attention window instead of a ctx-sized KV cache. This makes it unusually
        memory-efficient for long contexts.
      </p>

      <h2>Key Findings</h2>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Avg tok/s</th>
            <th>TTFT (think off)</th>
            <th>Tool correct</th>
            <th>Recommended think mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gemma4:26b</code></td>
            <td>~39</td>
            <td>~800ms</td>
            <td>97%</td>
            <td>off</td>
          </tr>
          <tr>
            <td><code>gemma4:e4b</code></td>
            <td>~38</td>
            <td>~520ms</td>
            <td>82% off / 99% on</td>
            <td>on for tool calls, off for prose</td>
          </tr>
          <tr>
            <td><code>qwen3.5:9b</code></td>
            <td>~21</td>
            <td>~640ms</td>
            <td>95%</td>
            <td>always off (think=on is broken)</td>
          </tr>
          <tr>
            <td><code>Huihui-Qwen3.6-27B nvfp4</code></td>
            <td>~14</td>
            <td>~24,000ms</td>
            <td>62%</td>
            <td>off (think=on does not help)</td>
          </tr>
        </tbody>
      </table>

      <h2>Per-Model Breakdown</h2>

      <h3>gemma4:26b - the workhorse</h3>
      <p>
        The standout model for agent workloads. It hit <strong>~39 tok/s</strong> consistently across all
        context sizes from 16k to 128k, with tool-call accuracy at <strong>97%</strong>. Think mode was a
        net negative: it raised TTFT from ~800ms to ~3000ms on tool calls without improving correctness.
      </p>
      <p>Best config across 407 tested:</p>
      <CodeBlock>
        {`{
  "num_ctx": 65536,
  "temperature": 0.1,
  "top_p": 0.9,
  "top_k": 40,
  "repeat_penalty": 1.0,
  "num_predict": 512,
  "think": false
}`}
      </CodeBlock>

      <h3>gemma4:e4b - the efficient option</h3>
      <p>
        Surprisingly fast at <strong>~38 tok/s</strong> despite being only 8B parameters. It is the only
        model where <strong>think=on genuinely helps tool calls</strong>, jumping accuracy from 82% to 99%.
        For prose generation, skip thinking to keep TTFT under 600ms. At ~4.5 GB weights it fits
        comfortably alongside other hot models.
      </p>

      <h3>qwen3.5:9b - solid but broken thinking</h3>
      <p>
        Good all-round performer at <strong>~21 tok/s</strong> with 95% tool correctness when think is off.
        The critical finding: <strong>think=on is broken</strong>. It pushed TTFT from ~640ms to ~27,000ms
        and dropped quality to 0/3 and tool accuracy to 0%. Always run this model with think=off.
      </p>
      <p>Best config:</p>
      <CodeBlock>
        {`{
  "num_ctx": 32768,
  "temperature": 0.1,
  "top_p": 0.9,
  "top_k": 20,
  "repeat_penalty": 1.1,
  "num_predict": 256,
  "think": false
}`}
      </CodeBlock>

      <h3>Huihui-Qwen3.6-27B nvfp4 - too slow for agents</h3>
      <p>
        Only <strong>~14 tok/s</strong> and a TTFT of <strong>24 seconds</strong> with think=on. Tool
        correctness at 62% (186 out of 299 runs) makes it unreliable for structured output. Not
        recommended for interactive or agent use.
      </p>

      <h2>Running the Benchmarks Yourself</h2>
      <p>The suite is built around <code>param_benchmark.py</code> which drives the Ollama API directly.</p>

      <h3>Full sweep of all models</h3>
      <CodeBlock>./run_all.sh</CodeBlock>

      <h3>Quick validation (~5 min per model)</h3>
      <CodeBlock>./run_all.sh --quick</CodeBlock>

      <h3>Single model</h3>
      <CodeBlock>./run_gemma4_26b.sh --quick</CodeBlock>

      <h3>Custom parameter sweep</h3>
      <CodeBlock>
        {`python3 param_benchmark.py \\
  --model gemma4:26b \\
  --ctx 16384 32768 65536 \\
  --temp 0.0 0.1 \\
  --top-p 0.9 \\
  --top-k 20 40 \\
  --rep-pen 1.0 \\
  --num-predict 512 \\
  --think both`}
      </CodeBlock>

      <h3>Resume an interrupted run</h3>
      <CodeBlock>python3 param_benchmark.py --model gemma4:26b --resume 20260516_211452</CodeBlock>

      <p>
        Results land in <code>results/&lt;model_slug&gt;/</code> as both a human-readable <code>.md</code>{' '}
        report and a raw <code>benchmark_results.jsonl</code> file. Run{' '}
        <code>python3 update_readme.py</code> to regenerate the run history table in the README.
      </p>

      <h2>Run History</h2>
      <p>
        Aggregate scores across all benchmark runs. Tool correct % is calculated against the total number of
        tool call opportunities in that run set.
      </p>
      <table>
        <thead>
          <tr>
            <th>Model</th>
            <th>Configs tested</th>
            <th>Avg Q tok/s</th>
            <th>Avg TC tok/s</th>
            <th>Tool correct</th>
            <th>Avg quality</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>gemma4:26b</code></td>
            <td>407</td>
            <td>38.84</td>
            <td>39.60</td>
            <td>407 / 418 (97%)</td>
            <td>2.1 / 3</td>
          </tr>
          <tr>
            <td><code>gemma4:e4b</code></td>
            <td>485</td>
            <td>37.45</td>
            <td>39.21</td>
            <td>443 / 490 (90%)</td>
            <td>2.3 / 3</td>
          </tr>
          <tr>
            <td><code>qwen3.5:9b</code></td>
            <td>389</td>
            <td>21.16</td>
            <td>21.70</td>
            <td>208 / 399 (52%)</td>
            <td>1.6 / 3</td>
          </tr>
          <tr>
            <td><code>Huihui/Qwen3.6-27B nvfp4</code></td>
            <td>293</td>
            <td>13.86</td>
            <td>13.81</td>
            <td>186 / 299 (62%)</td>
            <td>3.0 / 3</td>
          </tr>
          <tr>
            <td><code>qwen3.6:27b-coding-nvfp4</code> *</td>
            <td>6</td>
            <td>13.34</td>
            <td>13.35</td>
            <td>6 / 6 (100%)</td>
            <td>3.0 / 3</td>
          </tr>
        </tbody>
      </table>
      <p>
        Q tok/s = query (prompt evaluation) tokens per second. TC tok/s = tool call tokens per second.
        Quality is manually scored 0-3 per run on response coherence and instruction following.
      </p>
      <p>
        * Preliminary run only (6 configs). Scores are directionally useful but not statistically meaningful.
      </p>

      <h2>Takeaways</h2>
      <ul>
        <li>
          <strong>gemma4:26b is the best all-round choice</strong> for agents on 32 GB. Fast, reliable tool
          calls, and context-size-agnostic memory usage thanks to SWA.
        </li>
        <li>
          <strong>Think mode is model-specific.</strong> It only helps gemma4:e4b on tool calls. For every
          other model tested it slows TTFT without improving results.
        </li>
        <li>
          <strong>Low temperature (0.0 to 0.1) consistently wins</strong> for agent and tool workloads.
          Higher temperatures did not improve quality scores in any model.
        </li>
        <li>
          <strong>Context size has almost no speed impact on gemma4 models</strong> due to SWA, but matters
          for dense transformers like qwen3.5.
        </li>
        <li>
          <strong>q8_0 KV cache is the right default.</strong> It fits comfortably on 32 GB at 64k context
          for the 26B model and cuts memory roughly in half compared to f16.
        </li>
      </ul>
    </div>
  );
};

export default LocalLLMBenchBlogContent;
